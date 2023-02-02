const strXML=
        `<list>
            <student>
                <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
            </student>
            <student>
                <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
            </student>
        </list>
        `;

const parser=new DOMParser();

const xmlDOM=parser.parseFromString(strXML,"text/xml");
const listNode=xmlDOM.querySelector("list");
const studentNodes=listNode.querySelectorAll("student");

const result={
  list: []
};

studentNodes.forEach(student=>{
  let nameNode=student.querySelector("name");
  let firstNode=nameNode.querySelector("first");
  let secondNode=nameNode.querySelector("second");
  let ageNode=student.querySelector("age");
  let profNode=student.querySelector("prof");
  let langAttr=nameNode.getAttribute("lang");
  result.list.push({
    name: firstNode.textContent+' '+secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
  })
})
            
console.log('result:',result);

