import React from 'react';
import { MDX } from '@mdx-js/mdx';
import { CodeBlock } from '../CodeBlock';

const Stage = ({ children, className }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-body sg-stage">{children}</div>
      <div className="panel-footer sg-code-block">
        <CodeBlock>
          <MDX>
            ```markup
            {React.Children.toArray(children).join('\n')}
            ```
          </MDX>
        </CodeBlock>
      </div>
    </div>
  );
};

export { Stage };
