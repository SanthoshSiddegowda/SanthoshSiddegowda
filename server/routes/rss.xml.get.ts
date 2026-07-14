import { serverQueryContent } from '#content/server'

const SITE = 'https://santhoshsiddegowda.com'
const TITLE = 'Santhosh J S'
const DESC = 'Backend engineering, AI, and developer productivity.'

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event)
    .where({ _path: { $contains: '/articles/' } })
    .sort({ date: -1 })
    .find()

  const items = docs
    .filter((d: any) => d.title && d._path)
    .map((d: any) => {
      const url = `${SITE}${d._path}`
      const pub = d.date ? new Date(d.date).toUTCString() : ''
      return `    <item>
      <title>${esc(d.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      ${pub ? `<pubDate>${pub}</pubDate>` : ''}
      <description>${esc(d.description || '')}</description>
      ${(d.tags || []).map((t: string) => `<category>${esc(t)}</category>`).join('')}
    </item>`
    })
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${TITLE}</title>
    <link>${SITE}</link>
    <description>${DESC}</description>
    <language>en</language>
${items}
  </channel>
</rss>`
})
