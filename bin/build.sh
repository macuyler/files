#!/bin/bash

echo "Building..."

# Clean Previous Builds
[ -d "dist" ] && rm -rf dist

# Copy public files
cp -r public/ dist

# Minify HTML
for file in src/*.html
do
	out="dist/$(echo "$file" | cut -d'/' -f2)"
	html-minifier \
				--collapse-whitespace \
				--remove-comments \
				--remove-redundant-attributes \
				--remove-tag-whitespace \
				--use-short-doctype \
				--output $out \
				$file
done

# Minify JavaScript
babel src --out-dir dist/src --minified --quiet

# Minify CSS
mkdir -p dist/src/assets/css
for file in src/assets/css/*.css
do
	out="dist/src/assets/css/$(echo "$file" | cut -d'/' -f4)"
	postcss $file > $out
done

# Copy site images
cp -r src/assets/img dist/src/assets/img

echo "Done!"
echo ""

