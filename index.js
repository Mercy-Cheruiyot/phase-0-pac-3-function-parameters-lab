function introduction(name="Aki"){
return `Hi, my name is ${name}.`;
}
console.log (introduction());
const name="aki";


function introductionWithLanguage(name="Aki",language=" Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
console.log (introductionWithLanguage());


function introductionWithLanguageOptional( name,language="JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log (introductionWithLanguageOptional("Gracie","Javascript"));


