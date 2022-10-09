import { Player } from '@livepeer/react';
 
const playbackId = '4459k7e8g47udk6c';
 
export const DemoPlayer = () => {
  return (
    <Player
      title="Final Question"
      playbackId={playbackId}
      autoPlay
    //   muted
      showTitle={false}
      aspectRatio="16to9"
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'hidden' },
        radii: { containerBorderRadius: '10px' },
      }}
    />
  );
};