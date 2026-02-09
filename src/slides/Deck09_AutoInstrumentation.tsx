import React from 'react';
import { CheckCircle2, CloudLightning, Coffee, Code2 } from 'lucide-react';

const Slide4b_Adoption: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-12">
                The "Easy Button": Auto-Instrumentation
            </h2>

            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
                {/* The "Hard" Way */}
                <div className="w-full max-w-xl opacity-70 transform transition-all hover:opacity-90 lg:w-1/3 lg:scale-95">
                    <div className="glass-card p-8 space-y-4 border-obs-white/5">
                        <div className="flex items-center gap-4 text-obs-white/70">
                            <Code2 size={32} />
                            <h3 className="text-xl font-bold">Manual Coding</h3>
                        </div>
                        <div className="bg-obs-dark/80 p-4 rounded font-mono text-xs text-obs-white/60 leading-relaxed">
                            span = tracer.startSpan(...)<br />
                            span.setAttribute(...)<br />
                            try &#123;<br />
                            &nbsp;&nbsp;doWork()<br />
                            &#125; finally &#123;<br />
                            &nbsp;&nbsp;span.end()<br />
                            &#125;
                        </div>
                        <p className="text-center text-sm text-obs-white/40 italic">"Too much effort."</p>
                    </div>
                </div>

                {/* The "Easy" Way */}
                <div className="w-full max-w-2xl relative lg:w-5/12">
                    <div className="absolute -inset-1 bg-gradient-to-r from-obs-yellow to-jam-green opacity-30 blur-lg rounded-2xl" />
                    <div className="glass-card p-10 space-y-6 border-obs-yellow/50 bg-obs-dark/90 relative z-10">
                        <div className="flex items-center gap-4 text-obs-yellow">
                            <CloudLightning size={48} />
                            <h3 className="text-3xl font-black">Zero-Code Agent</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-black/50 p-4 rounded-lg flex items-center justify-between border border-obs-white/10">
                                <span className="font-mono text-jam-blue-light text-lg">java -javaagent:otel.jar -jar myapp.jar</span>
                                <CheckCircle2 className="text-jam-green w-6 h-6" />
                            </div>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-jam-green/10 rounded-full text-jam-green"><CheckCircle2 size={16} /></div>
                                <span className="text-obs-white font-medium">Automatic HTTP Tracing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-jam-green/10 rounded-full text-jam-green"><CheckCircle2 size={16} /></div>
                                <span className="text-obs-white font-medium">Automatic DB Queries</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-jam-green/10 rounded-full text-jam-green"><CheckCircle2 size={16} /></div>
                                <span className="text-obs-white font-medium">Automatic Error Catching</span>
                            </li>
                        </ul>

                        <div className="text-center pt-4 border-t border-obs-white/10">
                            <p className="text-obs-white/80 flex items-center justify-center gap-2">
                                <Coffee size={20} className="text-obs-yellow" />
                                <span>Get 80% visibility in 5 minutes.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide4b_Adoption;
