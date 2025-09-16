import type { ITrackDetail } from 'youtube-music-ts-api';

export type SongSummaryProps = ITrackDetail & {};

export function SongSummary(_props: SongSummaryProps) {
    return (
        <div>
            <h2>Song Summary</h2>
            <p>This is a summary of the song.</p>
        </div>
    );
}
