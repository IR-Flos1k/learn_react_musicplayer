export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
      headers: {
        'api-key': 'e92e40fd-7e76-4aab-9385-a725fec75f2a'
      }
    }).then(res => res.json())

    return promise
}

type GetTrackDetailsOutput ={
    data: GetTrackDetailsOutputData
}

export const getTracks = () => {
     const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'e92e40fd-7e76-4aab-9385-a725fec75f2a'
            }
        }).then(res => res.json())
        return promise
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

type AttachmentsDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentsDto>
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemOutputAttributes
}