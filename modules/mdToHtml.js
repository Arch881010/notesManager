const marked = require("marked");
const { sanitize } = require("isomorphic-dompurify");

function convertMdToHtml(md) {
  var html = marked.parse(md);

  html_list = html.split("\n");
  for (item in html_list) {
    ext = html_list[item];
    ext = ext.replaceAll(/(<.[^ (a-o)(q-z]*>)/gi, "");
    var matches = ext.match(/(\[.*\])/g);
    if (!matches) {
      html_list[item] = `<b1>${ext}</b1>`;
      continue;
    }
    var match = matches[0];
    var str = ext.replaceAll(match, "");
    color = match.replaceAll("[", "").replaceAll("]", "");
    str = `<b1 style="color: ${color}">${str}</b1>`;
    html_list[item] = str;
    continue;
  }

  html = html_list.join("<br>");

  //const clean = html;
  const clean = sanitize(html, { USE_PROFILES: { html: true }, ADD_ATTR: ['style'], ADD_TAGS: ['b1', 'a', 'img'] });
  return clean;
}

module.exports = convertMdToHtml;
