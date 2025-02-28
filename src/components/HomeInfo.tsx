const InfoBox = ({ text }: { text: string }) => {
  return (
    <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-blue-500 rounded-lg border px-8 py-4 shadow-2xl">
      <p className="font-medium xs:text-xs text-center">{text}</p>
    </div>
  );
};

const renderContent: Record<number, React.ReactNode> = {
  1: (
    <InfoBox text="Welcome!  Feel free to explore the island via standard controls." />
  ),
  2: <InfoBox text="The Magic Well" />,
  3: <InfoBox text="Fox Forest" />,
  4: <InfoBox text="Rabbit's Garden" />,
};

const HomeInfo = ({ currentStage }: { currentStage: number | null }) => {
  if (currentStage === null || !renderContent[currentStage]) {
    return null;
  }

  return renderContent[currentStage];
};

export default HomeInfo;
