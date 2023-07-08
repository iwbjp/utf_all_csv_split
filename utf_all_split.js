const fs = require('fs')
const readline = require('readline')
const path = require('path')

const dataDirPath = './data'

fs.readdir(dataDirPath, (err, files) => {
  if (err) throw err

  files.forEach((file) => {
    const extname = path.extname(file)

    if (extname === '.csv') {
      const filePath = path.join(dataDirPath, file)

      fs.unlink(filePath, (err) => {
        if (err) throw err
      })
    }
  })
})

async function processLineByLine() {
  const fileStream = fs.createReadStream('utf_all.csv')
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    let [col1, id, ...rest] = line.split(',')
    id = id.replace(/"/g, '').trim()
    const newLine = [...rest]
      .slice(0, 7)
      .map((t) => t.replace(/"/g, ''))
      .join(',')

    fs.appendFile(
      path.join(__dirname, `/data/${id}.csv`),
      newLine + '\n',
      (err) => {
        if (err) throw err
      }
    )
  }
}

processLineByLine()
