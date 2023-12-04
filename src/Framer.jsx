import { useState } from "react";
import { motion, AnimatePresence, backInOut } from "framer-motion";

function Framer() {
	const [show, setShow] = useState(true);
	return (
		<div className="flex items-center justify-center">
			<div>
				{show && (
					<AnimatePresence mode="popLayout">
						<motion.div
							initial={{
								rotate: "0deg",
								scale: 0,
							}}
							animate={{ rotate: "180deg", scale: 1 }}
							exit={{
								rotate: "0deg",
								scale: 0,
							}}
							transition={{
								duration: 1,
								ease: backInOut,
							}}
							className="w-28 h-28 bg-black "></motion.div>
					</AnimatePresence>
				)}
				<motion.button
					layout
					className="border-2 border-black p-2"
					onClick={() => {
						setShow(!show);
					}}>
					show
				</motion.button>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}>
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</motion.p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</p>
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</motion.p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							impedit voluptatem velit facere deleniti aut at quis ex? Fugit
							expedita numquam tempore corrupti quae vero quod nulla officia a
							eligendi unde minus eius necessitatibus ex quasi sit commodi
							labore quaerat, dolorem mollitia consequatur vel aspernatur
							excepturi quidem? Voluptas deleniti sapiente culpa voluptatibus
							explicabo et, laborum incidunt non necessitatibus corrupti dolorum
							autem laudantium illum totam aspernatur nobis beatae veniam
							ratione quisquam consequuntur. Doloribus, amet totam! Laborum,
							ipsa beatae praesentium unde cumque ab, maxime quia fuga pariatur
							officiis hic tempora nesciunt minus ipsam corporis tenetur animi
							saepe! Sit architecto voluptas accusantium, repudiandae iure optio
							dolor libero omnis, vero nihil minima! Minima aliquid dolorum eum
							ipsum ipsa atque, necessitatibus, iusto pariatur ullam recusandae
							id itaque perferendis ab omnis illum porro delectus natus debitis
							quod iste, amet cupiditate asperiores animi! Quisquam obcaecati
							mollitia fuga vero, placeat possimus omnis culpa error sit
							consequatur eligendi totam quaerat harum dolorum, earum ipsa alias
							optio numquam esse quos inventore. Fugit reiciendis repudiandae,
							nobis enim maiores molestiae ab, quisquam provident nulla sequi
							laboriosam accusamus odio doloremque sapiente nemo id veniam
							laudantium voluptate sint labore? Atque nihil odio nam ex quod
							tempore harum suscipit? Inventore corrupti officia ducimus
							dignissimos iure.
						</p>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Framer;
