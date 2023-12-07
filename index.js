const fs = require("fs");

function mdLinks(caminhoArquivo, options) {
  return new Promise(function (resolve, reject) {
    fs.readFile(caminhoArquivo, "utf8", (err, data) => {
      if (err) reject(err);
      const pattern = /\[([^\]]+)\]\((https?[^)]+)\)/g;
      const matches = [...data.matchAll(pattern)];
      const links = matches.map((match) => {
        return {
          href: match[2],
          text: match[1],
          file: caminhoArquivo,
        };
      });
      if (options.validate === false){
      resolve(links);
      } else {
        const linksValidates = links.map(link => {
            return fetch(link.href).then(response =>{
              links.status = response.status
              if (response.status >= 200 && response.status <= 299){
                link.ok = 'Ok'
              } else {
                link.ok = 'Fail'
              }
              return link
            } 
            ).catch(err =>{
              link.ok = 'Fail'
              link.status = err.code
              return link
            }
            )
        })
        resolve(Promise.all(linksValidates))
    }
    });
  });
}

mdLinks("./readHere.md", {validate:true}).then(result => console.log(result)) //pede aqui pra ele ler

module.exports = { mdLinks };
