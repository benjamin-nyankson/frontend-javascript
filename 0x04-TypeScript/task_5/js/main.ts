// Function to sum MajorCredits
export function sumMajorCredits(subject1: { MajorCredits: number }, subject2: { MajorCredits: number }): number {
  return subject1.MajorCredits + subject2.MajorCredits;
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: { MinorCredits: number }, subject2: { MinorCredits: number }): number {
  return subject1.MinorCredits + subject2.MinorCredits;
}
