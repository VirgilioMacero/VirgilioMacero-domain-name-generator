let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".us", ".es", ".cl", ".com.ve"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(
        pronoun[i] +
          adj[j] +
          noun[k] +
          domain[Math.floor(Math.random() * domain.length)]
      );
    }
  }
}
