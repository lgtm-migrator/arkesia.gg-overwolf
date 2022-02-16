import { useEffect, useState } from "react";
import { isOverwolfApp } from "./overwolf";

export const LOST_ARK_CLASS_ID = 21864;

export function getGameIsRunning(gameId: number): Promise<boolean> {
  return new Promise((resolve) => {
    overwolf.games.getRunningGameInfo((result) => {
      resolve(result && result.classId === gameId);
    });
  });
}

export function useRunningGameInfo():
  | overwolf.games.RunningGameInfo
  | undefined {
  const [runningGameInfo, setRunningGameInfo] = useState<
    overwolf.games.RunningGameInfo | undefined
  >(undefined);

  useEffect(() => {
    if (!isOverwolfApp) {
      return;
    }
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

export function useisLostArkRunning(): boolean {
  const runningGameInfo = useRunningGameInfo();
  return runningGameInfo
    ? runningGameInfo.classId === LOST_ARK_CLASS_ID
    : false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getGameInfo(): Promise<any> {
  return new Promise((resolve, reject) => {
    overwolf.games.events.getInfo((info) => {
      if (info.success) {
        resolve(info.res);
      } else {
        reject(info);
      }
    });
  });
}
