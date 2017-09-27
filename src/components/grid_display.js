import React, { Component } from 'react';
import Display from './display';

class GridDisplay extends Component {
    render() {
        return (
            <div className="grid">

                <section>
                    <Display
                        x="1"
                        y="5"
                    />
                    <Display
                        x="1"
                        y="4"
                    />
                    <Display
                        x="1"
                        y="3"
                    />
                    <Display
                        x="1"
                        y="2"
                    />
                    <Display
                        x="1"
                        y="1"
                    />
                </section>

                <section>
                    <Display
                        x="2"
                        y="5"
                    />
                    <Display
                        x="2"
                        y="4"
                    />
                    <Display
                        x="2"
                        y="3"
                    />
                    <Display x="2"
                        y="2"
                    />
                    <Display
                        x="2"
                        y="1"
                    />
                </section>

                <section>
                    <Display
                        x="3"
                        y="5"
                    />
                    <Display
                        x="3"
                        y="4"
                    />
                    <Display
                        x="3"
                        y="3"
                    />
                    <Display
                        x="3"
                        y="2"
                    />
                    <Display
                        x="3" y="1"
                    />
                </section>

                <section>
                    <Display
                        x="4"
                        y="5"
                    />
                    <Display
                        x="4"
                        y="4"
                    />
                    <Display
                        x="4"
                        y="3"
                    />
                    <Display
                        x="4"
                        y="2"
                    />
                    <Display
                        x="4"
                        y="1"
                    />
                </section>

                <section>
                    <Display
                        x="5"
                        y="5"
                    />
                    <Display
                        x="5"
                        y="4"
                    />
                    <Display
                        x="5"
                        y="3"
                    />
                    <Display
                        x="5"
                        y="2"
                    />
                    <Display
                        x="5"
                        y="1"
                    />
                </section>
            </div>
        );
    }
}

export default GridDisplay;
