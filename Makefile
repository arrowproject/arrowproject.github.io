install:
	yarn

build export dev:
	yarn $(@)

publish:
	$(MAKE) export
	touch out/.nojekyll
	yarn gh-pages -d out -b master
