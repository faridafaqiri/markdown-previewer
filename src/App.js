import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Ensure this import is correct
import './App.css';

// Use function declarations for components to comply with eslint rules
function LineBreak() {
  return <br />;
}

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === \\\`\\\`\\\` && lastLine === \\\`\\\`\\\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Alt text](https://via.placeholder.com/150 "Optional title")

This is a line break example.  
Here is another line after a break.`);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Editor</h2>
      </nav>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <nav className="navbar">
        <h2>Reviewer</h2>
      </nav>

      <div id="preview">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Use remark-gfm plugin
          components={{ br: LineBreak }} // Use the LineBreak component
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
