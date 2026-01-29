// Function to sum MajorCredits
interface MajorCredits{
    credits:number
}
export function sumMajorCredits(subject1: MajorCredits, subject2: {MajorCredits): number {
  return subject1.credits + subject2.credits;
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: { MinorCredits: number }, subject2: { MinorCredits: number }): number {
  return subject1.MinorCredits + subject2.MinorCredits;
}
