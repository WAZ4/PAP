const editor = new EditorJS({
    holder: 'editorjs',
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
    tools: {
        header: Header,
        delimiter: Delimiter,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        embed: Embed,
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    // byFile: 'http://localhost:8888/PAP/testeEditorJS/uploadImagemLocal.php', // Your backend file uploader endpoint
                    byFile: 'scriptsPHP/uploadImagemLocal.php', // Your backend file uploader endpoint

                },
            }
        },
        quote: Quote,
    }
});