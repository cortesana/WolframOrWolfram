'use strict';

function getTextNodes(node) {

    let tagName = node.tagName ? node.tagName.toLowerCase() : "";

    if(tagName =='input' || tagName == 'textarea') {
        return;
    }
    switch(node.nodeType) {
        case 1:
        case 9:
        case 11:
            let i = 0;
            let nodeChildren = node.childNodes;
            while(nodeChildren[i]) {
                getTextNodes(nodeChildren[i]);
                nodeChildren[i] = nodeChildren[i++];
            }
            break;
        case 3:
            findAndReplace(node);
    }

}

function findAndReplace(textNode) {

    let textNodeContent = textNode.nodeValue;

    // English
    textNodeContent = textNodeContent.replace(/\bTungsten\b/g, "Wolfram");
    textNodeContent = textNodeContent.replace(/\btungsten\b/g, "wolfram");
    // Spanish
    textNodeContent = textNodeContent.replace(/\bTungsteno\b/g, "Wolframio");
    textNodeContent = textNodeContent.replace(/\btungsteno\b/g, "wolframio");
    textNode.nodeValue = textNodeContent;

}

getTextNodes(document.body);