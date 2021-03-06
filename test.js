import { equal } from 'assert'
import md from 'markdown-it'
import anchor from './'

equal(
  md().use(anchor).render('# H1\n\n## H2'),
  '<h1 id="h1">H1</h1>\n<h2 id="h2">H2</h2>\n'
)

equal(
  md().use(anchor, { level: 2 }).render('# H1\n\n## H2'),
  '<h1>H1</h1>\n<h2 id="h2">H2</h2>\n'
)

equal(
  md().use(anchor, { permalink: true }).render('# H1'),
  '<h1 id="h1">H1 <a class="header-anchor" href="#h1" aria-hidden="true">¶</a></h1>\n'
)

equal(
  md().use(anchor, { permalink: true, permalinkClass: 'test' }).render('# H1'),
  '<h1 id="h1">H1 <a class="test" href="#h1" aria-hidden="true">¶</a></h1>\n'
)

equal(
  md().use(anchor, { permalink: true, permalinkSymbol: 'P' }).render('# H1'),
  '<h1 id="h1">H1 <a class="header-anchor" href="#h1" aria-hidden="true">P</a></h1>\n'
)

equal(
  md().use(anchor, { permalink: true, permalinkSymbol: '<i class="icon"></i>' }).render('# H1'),
  '<h1 id="h1">H1 <a class="header-anchor" href="#h1" aria-hidden="true"><i class="icon"></i></a></h1>\n'
)

equal(
  md().use(anchor).render('# Title\n\n## Title'),
  '<h1 id="title">Title</h1>\n<h2 id="title-2">Title</h2>\n'
)

equal(
  md().use(anchor, { permalink: true, permalinkBefore: true }).render('# H1'),
  '<h1 id="h1"><a class="header-anchor" href="#h1" aria-hidden="true">¶</a> H1</h1>\n'
)

equal(
  md().use(anchor, { level: 2, permalink: true }).render('# H1\n\n## H2'),
  '<h1>H1</h1>\n<h2 id="h2">H2 <a class="header-anchor" href="#h2" aria-hidden="true">¶</a></h2>\n'
)
