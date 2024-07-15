# Reports

We can generate reports for:
- javadoc
- swagger
- pitest
- checkstyle
- wapiti
- zap

and whatever else we need.

A possiblity is publishing them to a static site like this one and provide a menu to navigate between them.

## Java

### Javadoc

### Pitest

::: warning
for now it works only if `.../pitest/index.html` is typed in the search bar.
We are serving this as static file from the `public` folder of vitepress.
:::

**example:**

see pitest report [here](/reports/pitest/index.html) (add index.html at
the end manually for now)

the assets are added to the `public/pitest` folder of vitepress [here](https://github.com/gipo355/angular-tomcat-gradle-monorepo/tree/dev/docs/web/public/reports/pitest)

### Checkstyle

## Vulnerability scans

### Wapiti

### ZAP

## Other

- coverage
- swagger
