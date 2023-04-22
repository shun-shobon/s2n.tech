import type { Resume } from "@shun-shobon/resume";
import { resume } from "@shun-shobon/resume";
import type { ReactNode } from "react";
import { createContext } from "react";

const ResumeContext = createContext(resume);

interface Props {
  children: ReactNode;
}

export function ResumeProvider({ children }: Props): JSX.Element {
  return (
    <ResumeContext.Provider value={resume}>{children}</ResumeContext.Provider>
  );
}

export function useResume<T>(selector: (resume: Resume) => T): T {
  return selector(resume);
}
