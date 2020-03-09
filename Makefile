svg:
	# A most excellent way to clean svgs and create React Native components
	# https://www.smooth-code.com/open-source/svgr/docs/cli/
	# Note: raw svg assets must have #000000 as primary and #FF0000 as secondary
	# for the prop replacements to find and replace correctly.

	# Clear directory
	rm -rf src/components/icon/icons && mkdir src/components/icon/icons

	# Clean SVGs and create React components
	# Note: For script below, make sure that when exporting in Illustrator export uses the presentation attributes
	# File > Export > Export as > SVG > SVG Options [choose - styling = Presentation Attributes]
	yarn svgr src/assets/svg --out-dir src/components/icon/icons --replace-attr-values "#000={color}" --replace-attr-values "#000000={props.color}" --replace-attr-values "black={props.color}" --replace-attr-values "#F00={props.secondaryColor}" --replace-attr-values "#FF0000={props.secondaryColor}" --replace-attr-values "red={props.secondaryColor}" --filename-case "kebab" --svg-props "height={props.height}" --svg-props "width={props.height}" --no-svgo --prettier-config "{\"semi\": false, \"singleQuote\": false, \"printWidth\": 120 }"

	# Create type file of icon names
	echo "export type IconTypes =" > src/components/icon/types.ts
	for filename in src/components/icon/icons/*; do \
		filenameNoPath=$${filename##*/}; \
		basename=$${filenameNoPath%%.*}; \
		echo "    | \"$${basename}\"" >> src/components/icon/types.ts; \
	done;

	# Create index file of new SVG components
	yarn create-index src/components/icon/icons -x js