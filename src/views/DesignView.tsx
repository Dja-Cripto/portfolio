import DesignAbout from '../components/design/DesignAbout';
import DesignProjects from '../components/design/DesignProjects';
import DesignSkills from '../components/design/DesignSkills';
import DesignContact from '../components/design/DesignContact';

export default function DesignView() {
  return (
    <div className="relative z-10 font-sans">
      <DesignAbout />
      <DesignProjects />
      <DesignSkills />
      <DesignContact />
    </div>
  );
}
