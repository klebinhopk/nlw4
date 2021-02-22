import './ExperienceBar.scss';

function ExprerienceBar () {
    return (
        <>
        <header className="experience-bar">
			<span>0 xp</span>

			<div>
				<div style={{ width: '50%' }} />
				<span className="current-xp" style={{ left: '50%' }}>
					300 xp
				</span>
			</div>

			<span>600 xp</span>
		</header>
        </>
    );
}
export default ExprerienceBar;