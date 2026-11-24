type VerticalVimeoProps = {
  videoId: string;
  title: string;
  size?: 'inline' | 'large';
  lazy?: boolean;
};

export default function VerticalVimeo({
  videoId,
  title,
  size = 'inline',
  lazy = true,
}: VerticalVimeoProps) {
  const width = size === 'large' ? 'max-w-[360px]' : 'mb-6 max-w-[260px]';
  return (
    <figure className={`mx-auto w-full ${width}`}>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink/5 shadow-md ring-1 ring-ink/10">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autopause=0&player_id=0&app_id=58479`}
          title={title}
          loading={lazy ? 'lazy' : 'eager'}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </figure>
  );
}
