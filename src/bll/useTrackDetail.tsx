import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";


export function useTrackDetail(trackId: string | null) {
  const [trackDetail, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null)

  useEffect(() => {
    if (!trackId) {
      return;
    }

    getTrack(trackId)
      .then((json) => setSelectedTrack(json.data));
    return () => {
      setSelectedTrack(null);
    }
  }, [trackId]);

  return {
    trackDetail
  }
}
