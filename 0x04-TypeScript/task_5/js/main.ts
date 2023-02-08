interface MajorCredits {
  credits: number;
  __majorbrand: void;
}

interface MinorCredits {
  credits: number;
  __minorbrand: void;
}


function sumMajorCredits(subject1: MajorCredits , subject2: MajorCredits) {
  return {credits: subject1.credits + subject2.credits} as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits , subject2: MinorCredits) {
  return {credits: subject1.credits + subject2.credits} as MinorCredits;
}

const subject1: MajorCredits = {credits: 10} as MajorCredits
const subject2: MinorCredits = {credits: 10} as MinorCredits

console.log(sumMajorCredits(subject1, subject1));
