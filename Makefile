install:
	yarn

build export dev:
	yarn $(@)

publish:
	$(MAKE) build export
	touch out/.nojekyll
	yarn gh-pages -d out -b master -a
