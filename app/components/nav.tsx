import { HiOutlineMenu } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { links } from "~/links";
type Props = {
    home?: boolean
}
const Nav: React.FC<Props> = ({ home = false }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
    }, [menuOpen]);
    return (
        <nav className={`${home ? 'absolute' : ''} top-0 z-50 w-full`}>
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <div className="w-1/3">
                    <button onClick={() => setMenuOpen(true)} className="text-white hover:text-primary cursor-pointer transition-colors">
                        <HiOutlineMenu size={28} />
                    </button>
                </div>
                {menuOpen && <div className="fixed inset-0 bg-black/30" onClick={() => setMenuOpen(false)}></div>}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 left-0 w-4/5 md:w-[424px] flex-col flex md:px-[55px] h-full bg-black shadow-lg z-50 gap-[23px]"
                        >
                            <nav className="p-4">
                                <ul className="space-y-2 text-[24px] flex flex-col gap-[9px] overflow-y-auto">
                                    {links.map(link => <li key={link.name} className="text-[#F0E7DA] py-2 px-2.5 border-b border-[#656565]">
                                        <NavLink viewTransition to={`/${link.link}`} className="cursor-pointer">{link.name}</NavLink>
                                    </li>)}
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-end w-1/2">
                    <NavLink to="/" className="text-white md:text-[32px] text-lg font-light md:text-base hover:text-primary cursor-pointer uppercase font-radio px-4 py-2 rounded-md transition-colors">
                        ATTIH SOUL
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
