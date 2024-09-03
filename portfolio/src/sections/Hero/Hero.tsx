import styles from "./HeroStyles.module.css";
import discordIcon from "../../assets/discord.svg";
import linkedInIcon from "../../assets/linkedIn.svg";
import resume from "../../assets/resume.pdf";

function Hero() {
	return (
		<section
			id="hero"
			className={styles.container}
		>
			<div className={styles.colorModeContainer}>
				<img
					className="{styles.hero}"
					src="{path}"
					alt="Profile Picture"
				></img>
				<img
					className="{styles.colorMode}"
					src={linkedInIcon}
					alt="Sun Icon"
				></img>
			</div>
			<div className={styles.info}>
				<h1>
					Luca
					<br />
					Stubbe
				</h1>
				<h2>Developer</h2>
				<span>
					<a
						href="https://discordapp.com/users/174681544097529856"
						target="_blank"
					>
						<img
							src={discordIcon}
							alt="Discord icon"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/luca-stubbe/"
						target="_blank"
					>
						<img
							src={linkedInIcon}
							alt="LinkedIn icon"
						/>
					</a>
				</span>
				<a href={resume} download>
					<button className="hover">
						Resume
					</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
