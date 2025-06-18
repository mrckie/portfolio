"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import WebLogo from "../../assets/m.png";

export const SplashScreen = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(false), 2400);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.9 }}
					className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black"
				>
					<motion.div
						initial={{ scale: 0.7, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.9, ease: "easeInOut" }}
						className="text-2xl font-bold tracking-wide"
					>
						<img src={WebLogo} alt="Web Logo" className="w-24 h-24 object-contain border-[2px] border-white rounded-full" />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
