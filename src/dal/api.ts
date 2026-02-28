export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if(!apiKey) return undefined

    return{
        'api-key': apiKey
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
      headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}

type GetTrackDetailsOutput ={
    data: GetTrackDetailsOutputData
}

export const getTracks = () => {
     const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: prepareHeaders()
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