import 'colors';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import process from 'process';
import stringToPascal from './stringToPascal.js';
import {
  component,
  componentCSS,
  componentIndex,
  componentTest,
  componentMarkdown,
  componentStory,
  componentExample,
} from './templates/index.js';

// Store the component name from the command line.
const COMPONENT_NAME = stringToPascal(process.argv[2]);

// If no component name is provided, log an error and exit.
if (!COMPONENT_NAME) {
  console.error(
    '❓ No component name provided. Please provide a component name'.red
  );
  process.exit(1);
}

// Store the path to the component directory.
const COMPONENT_PATH = `src/components/${COMPONENT_NAME}`;

// If the component directory already exists, log an error and exit.
if (existsSync(COMPONENT_PATH)) {
  console.error(
    `❗️ The component directory ${COMPONENT_PATH} already exists`.red
  );
  process.exit(1);
}

console.log(
  `📁 Creating component files at the directory: ${COMPONENT_PATH}...`.green
);

// Create the component directory.
mkdirSync(COMPONENT_PATH);

// Create the component files.
const componentFile = {
  content: component(COMPONENT_NAME).content,
  fileName: component(COMPONENT_NAME).fileName,
  extension: component(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_PATH}/${componentFile.fileName}.${componentFile.extension}`,
  componentFile.content
);

console.log(
  `🛠️ Created ${componentFile.fileName}.${componentFile.extension} component file`
    .green
);

const componentCSSFile = {
  content: componentCSS(COMPONENT_NAME).content,
  fileName: componentCSS(COMPONENT_NAME).fileName,
  extension: componentCSS(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_PATH}/${componentCSSFile.fileName}.${componentCSSFile.extension}`,
  componentCSSFile.content
);

console.log(
  `🎨 Created ${componentCSSFile.fileName}.${componentCSSFile.extension} CSS file`
    .green
);

const componentIndexFile = {
  content: componentIndex(COMPONENT_NAME).content,
  fileName: componentIndex(COMPONENT_NAME).fileName,
  extension: componentIndex(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_PATH}/${componentIndexFile.fileName}.${componentIndexFile.extension}`,
  componentIndexFile.content
);

console.log(
  `📑 Created ${componentIndexFile.fileName}.${componentIndexFile.extension} index file`
    .green
);

// Create the test directory.
const COMPONENT_TEST_PATH = `${COMPONENT_PATH}/__test__`;

mkdirSync(COMPONENT_TEST_PATH);

console.log(
  `📁 Creating test files at the directory: ${COMPONENT_TEST_PATH}...`.green
);

// Create the test file.
const componentTestFile = {
  content: componentTest(COMPONENT_NAME).content,
  fileName: componentTest(COMPONENT_NAME).fileName,
  extension: componentTest(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_TEST_PATH}/${componentTestFile.fileName}.${componentTestFile.extension}`,
  componentTestFile.content
);

console.log(`🧪 Created component test file`.green);

// Create the Storybook Docs directory.
const COMPONENT_STORYBOOK_PATH = `${COMPONENT_PATH}/__docs__`;

mkdirSync(COMPONENT_STORYBOOK_PATH);

console.log(
  `📁 Creating Storybook files at the directory: ${COMPONENT_STORYBOOK_PATH}...`
    .green
);

// Create the Storybook files.
const componentMarkdownFile = {
  content: componentMarkdown(COMPONENT_NAME).content,
  fileName: componentMarkdown(COMPONENT_NAME).fileName,
  extension: componentMarkdown(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_STORYBOOK_PATH}/${componentMarkdownFile.fileName}.${componentMarkdownFile.extension}`,
  componentMarkdownFile.content
);

console.log(`📝 Created component markdown file`.green);

const componentStoryFile = {
  content: componentStory(COMPONENT_NAME).content,
  fileName: componentStory(COMPONENT_NAME).fileName,
  extension: componentStory(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_STORYBOOK_PATH}/${componentStoryFile.fileName}.${componentStoryFile.extension}`,
  componentStoryFile.content
);

console.log(`📖 Created component Storybook file`.green);

const componentExampleFile = {
  content: componentExample(COMPONENT_NAME).content,
  fileName: componentExample(COMPONENT_NAME).fileName,
  extension: componentExample(COMPONENT_NAME).extension,
};

writeFileSync(
  `${COMPONENT_STORYBOOK_PATH}/${componentExampleFile.fileName}.${componentExampleFile.extension}`,
  componentExampleFile.content
);

console.log(`📐 Created component example file`.green);

console.log(
  `🎉 Successfully created component files at the directory: ${COMPONENT_PATH}`
    .green
);
