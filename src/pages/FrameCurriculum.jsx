import { useState } from "react";
import CV from "../resources/CV.pdf";
import { useRef } from "react";
import { useEffect } from "react";

export default function FrameCurriculum() {

  const [renderFailed, setRenderFailed] = useState(false);
  const objectRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (objectRef.current && objectRef.current.clientHeight === 0) {
        setRenderFailed(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {renderFailed ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>
            Tu navegador no soporta este PDF. Puedes{" "}
            <a href={CV} download="CV.pdf">
              descargar el PDF aquí
            </a>
            .
          </p>
        </div>
      ) : (
        <object
          ref={objectRef}
          data={CV}
          type="application/pdf"
          width="100%"
          height="100%"
          title="CV"
        >
          <div>
            <p style={{ textAlign: "center", padding: "20px" }}>CARGANDO....</p>
          </div>
        </object>
      )}
    </div>
  );
}
