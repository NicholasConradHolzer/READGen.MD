function rendLiceBadge(lice) {
  console.log('License: ', lice);
    switch(lice) {
      case 'MIT':
        return `Licensed under : [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'GNU':
        return `Licensed under : [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case 'ISC':
        return `Licensed under : [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `
      case 'n/a':
        return ""
    default:
      return `Licensed under : [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}



function rendTableLink(lice) {
  if (lice === 'none') {
    return ''
  } else {
    return `- [License](#license)`
  }
}
function rendLiceLink(lice) {
  if (lice === true) {
    return
  }
  console.log('License: ', lice);
  switch(lice) {
      case 'MIT':
        return `https://opensource.org/licenses/MIT`
      case 'GNU':
        return `https://www.gnu.org/licenses/gpl-3.0.txt`
      case 'ISC':
        return `https://opensource.org/licenses/ISC`
    default:
      return ''
    };
}


function rendLiceSection(lice) {
  if (lice === true){return}
    console.log('License: ', lice);
  switch(lice) {
    case 'MIT': 
      return `## License\n
      Copyright <YEAR> <COPYRIGHT HOLDER>
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.` 
    case 'GNU':
      return `## Placeholder ##`
    case 'ISC':
      return `## Placeholder ##`
    case 'n/a':
      return `## Placeholder ##`
    };
}


function generateMarkdown(data) {
return `# ${data.name}


  ${rendLiceBadge(data.license)}
 ## Description:
 ${data.description}
 ### Table of Contents:
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#credits)
 - [Tests](#test)
 - [Questions](#questions)
 ${rendTableLink(data.license)}\n

 ## Installation:\n
 ${data.install}\n

 ## Use:\n
 ${data.use}\n

 ## Collaborators:\n
 ${data.colabs}\n

 ## Test:\n
 ${data.test}\n

 ## Questions:\n
 Find me on GitHub at <https://github.com/${data.username}> and take a look at my current and past projects.
 If you have any questions about this projcet, please send an email with the subject line ${data.name} to my email address at:
 ${data.email} \n

 ${rendLiceSection(data.license)}\n
 ${rendLiceLink(data.license)}\n



`;
}

module.exports = generateMarkdown;


