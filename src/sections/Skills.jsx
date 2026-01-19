import { mySkills } from "../constants/index.js";
import { useTranslation } from "../contexts/LanguageContext.jsx";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section className="c-space my-20" id="skills">
            <h3 className="head-text mb-10">{t('about.techStack')}</h3>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {mySkills.map((skillGroup, index) => (
                    <div key={index} className="w-full bg-black-200 border border-black-300 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group">
                        <h4 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-3 group-hover:text-blue-400 transition-colors">
                            {skillGroup.category}
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                            {skillGroup.items.map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group/item">
                                    <div className="w-12 h-12 bg-black-300 rounded-lg p-2.5 flex items-center justify-center border border-white/5 group-hover/item:border-white/20 group-hover/item:bg-black-500 transition-all duration-300">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                // Fallback text if icon missing
                                                e.target.parentNode.innerText = item.name.charAt(0);
                                                e.target.parentNode.style.color = 'white';
                                                e.target.parentNode.style.fontWeight = 'bold';
                                            }}
                                        />
                                    </div>
                                    <p className="text-sm text-white/70 font-medium text-center group-hover/item:text-white transition-colors">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-white-600 mt-10 text-center text-lg max-w-2xl mx-auto">
                {t('about.techStackDescription')}
            </p>
        </section>
    );
};

export default Skills;
