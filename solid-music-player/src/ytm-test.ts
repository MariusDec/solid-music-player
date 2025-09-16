import YouTubeMusic from 'youtube-music-ts-api';

async function main(): Promise<void> {
    const cookieStr = 'TODO: PUT YOUR COOKIE STRING HERE';

    const ytm = new YouTubeMusic();
    const ytma = await ytm.authenticate(cookieStr);
    const playlists = await ytma.getLibraryPlaylists();

    if (playlists) {
        for (const playlist of playlists) {
            if (playlist.id == null) continue;

            console.log(`Playlist: ${playlist.name}`);

            const playlistDetail = await ytma.getPlaylist(playlist.id);
            if (playlistDetail && playlistDetail.tracks != null) {
                for (const track of playlistDetail.tracks) {
                    console.log(`    Track: ${track.title}`);
                }
            }
        }
    }
}

await main();
