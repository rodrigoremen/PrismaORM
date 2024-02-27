import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// crear usuario
async function main() {
	const user = await prisma.user.findMany({
		include: {
			posts: true,
		},
	});
	console.log(user);
	user.forEach((user) => {
		console.log('-------------------');
		console.log(`User: ${user.name}`);
		console.log(`Email: ${user.email}`);
		user.posts.forEach((post,i) => {
			console.log(`${i+1}. ${post.title} - ${post.content}`);
		});
	});
}

main();
