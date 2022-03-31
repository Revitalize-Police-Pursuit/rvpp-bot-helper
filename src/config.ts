import type { ColorResolvable } from 'discord.js';

export const Botdev: string[] = JSON.parse(process.env.OWNERS!);
export const Botcolor = '3CAAFF' as ColorResolvable;
export const Botprefix = process.env.PREFIX || 'b!';