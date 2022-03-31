import { ApplyOptions } from '@sapphire/decorators';
import { Precondition, PreconditionOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { Botdev } from '../config';

@ApplyOptions<PreconditionOptions>({
	name: 'devOnly'
})
export class BotOwner extends Precondition {
	run(message: Message) {
		return Botdev.includes(message.author.id) ? this.ok() : this.error({ message: 'Only bot owner can do this' });
	}
}

declare module '@sapphire/framework' {
	export interface Preconditions {
		devOnly: never;
	}
}