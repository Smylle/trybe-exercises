let note = 100;

if (note >= 90 && note <= 100) {
    console.log("Conceito A");
} 

else if (note >= 80 && note <= 89) {
    console.log("Conceito B");
}

else if (note >= 70 && note <= 79) {
    console.log("Conceito C");
} 

else if (note >= 60 && note <= 69) {
    console.log("Conceito D");
} 

else if (note >= 50 && note <= 59) {
    console.log("Conceito E");
} 

else if (note >= 0 && note <= 49) {
    console.log("Conceito F");
}

else {
    console.log("Nota inadequada.");
}