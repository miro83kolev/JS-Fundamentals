function extract(filePath) {
    let fileNameStart = filePath.lastIndexOf('\\') + 1
    let fileExtStart = filePath.lastIndexOf('.') + 1
    let fileNameIndexEnd = fileExtStart - 1

    let fileName = filePath.substring(fileNameStart, fileNameIndexEnd)
    let fileExtension = filePath.substring(fileExtStart)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}

extract('C:\\Internal\\training-internal\\Template.pptx')