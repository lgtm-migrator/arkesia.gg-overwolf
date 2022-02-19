import { useEffect, useState } from "react";

export function useRunningGameInfo():
  | overwolf.games.RunningGameInfo
  | undefined {
  const [runningGameInfo, setRunningGameInfo] = useState<
    overwolf.games.RunningGameInfo | undefined
  >(undefined);

  useEffect(() => {
    function handleGameInfoUpdated(
      event: overwolf.games.GameInfoUpdatedEvent
    ): void {
      if (event.gameChanged) {
        setRunningGameInfo(event.gameInfo);
      }
    }

    overwolf.games.onGameInfoUpdated.addListener(handleGameInfoUpdated);

    overwolf.games.getRunningGameInfo((result) => {
      setRunningGameInfo(result);
    });

    return () => {
      overwolf.games.onGameInfoUpdated.removeListener(handleGameInfoUpdated);
    };
  }, []);

  return runningGameInfo;
}
