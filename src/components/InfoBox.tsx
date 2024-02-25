import { ReactNode } from "react";

// doesnt' contain the severity prop
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "hint" | "warning"; // enum
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

// establishes whch props are we using
type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  // hint infobox
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  // warning infobox
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
};

export default InfoBox;
