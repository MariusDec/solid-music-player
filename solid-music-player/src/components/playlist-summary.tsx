import type { IPlaylistDetail } from 'youtube-music-ts-api';

export type PlaylistSummaryProps = IPlaylistDetail & {};

export function PlaylistSummary(_props: PlaylistSummaryProps) {
    return (
        <div>
            <h2>Playlist Summary</h2>
            <p>This is a summary of the playlist.</p>
        </div>
    );
}
