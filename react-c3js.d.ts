// Type definitions for react-c3js 0.1.29
// Project: https://github.com/bcbcarl/react-c3js
// Definitions by: MonkeySlut <https://github.com/MonkeySlut>
// TypeScript Version: 2.6

/// <reference types="react" />
/// <reference types="c3" />

declare module "react-c3js" {
    export interface C3ChartProps extends React.Props<C3Chart> {
        data: c3.Data;

        size?: {
            /**
             * The desired width of the chart element.
             * If this option is not specified, the width of the chart will be calculated by the size of the parent element it's appended to.
             * Note: This option should be specified if possible because it can improve its performance because some size calculations will be skipped by an explicit value.
             */
            width?: number;
            /**
             * The desired height of the chart element.
             * If this option is not specified, the height of the chart will be calculated by the size of the parent element it's appended to.
             */
            height?: number;
        };
        
        padding?: {
            /**
             * The padding on the top of the chart.
             */
            top?: number;
            /**
             * The padding on the right of the chart.
             */
            right?: number;
            /**
             * The padding on the bottom of the chart.
             */
            bottom?: number;
            /**
             * The padding on the left of the chart.
             */
            left?: number;
        };
    
        resize?: {
            /**
             * Indicate if the chart should automatically get resized when the window gets resized.
             */
            auto?: boolean;
        };
    
        color?: {
            /**
             * Set custom color pattern.
             */
            pattern?: string[];
            threshold?: any; // Undocumented
        };
    
        interaction?: {
            /**
             * Indicate if the chart should have interactions.
             * If false is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
             */
            enabled?: boolean;
        };
    
        transition?: {
            /**
             * Set duration of transition (in milliseconds) for chart animation.
             * Note: If 0 or null set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
             */
            duration?: number;
        };
        
        /**
         * Set a callback to execute when the chart is initialized.
         */
        oninit?(): void;
    
        /**
         * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
         */
        onrendered?(): void;
    
        /**
         * Set a callback to execute when mouse enters the chart.
         */
        onmouseover?(): void;
        
        /**
         * Set a callback to execute when mouse leaves the chart.
         */
        onmouseout?(): void;
    
        /**
         * Set a callback to execute when user resizes the screen.
         */
        onresize?(): void;
    
        /**
         * Set a callback to execute when screen resize finished.
         */
        onresized?(): void;
    
        axis?: c3.Axis;
    
        grid?: c3.Grid;
        
        /**
         * Show rectangles inside the chart.
         * This option accepts array including object that has axis, start, end and class. The keys start, end and class are optional.
         * axis must be x, y or y2. start and end should be the value where regions start and end. If not specified, the edge values will be used. If timeseries x axis, date string, Date object and
         * unixtime integer can be used. If class is set, the region element will have it as class.
         */
        regions?: c3.RegionOptions[];
    
        legend?: c3.LegendOptions;
    
        tooltip?: c3.TooltipOptions;
    
        subchart?: c3.SubchartOptions;
    
        zoom?: c3.ZoomOptions;
        
        point?: c3.PointOptions;
    
        line?: {
            /**
             * Set if null data point will be connected or not.
             * If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.
             */
            connectNull?: boolean;
            /**
             * Change step type for step chart. 'step', 'step-before' and 'step-after' can be used.
             */
            step?: {
                type: string;
            };
        };
    
        area?: {
            /**
             * Set if min or max value will be 0 on area chart.
             */
            zerobased?: boolean;
        };
        
        bar?: {
            /**
             * Change the width of bar chart. If ratio is specified, change the width of bar chart by ratio.
             */
            width?: number | {
                /**
                 * Set the width of each bar by ratio
                 */
                ratio: number,
                /**
                 * Set max width of each bar
                 */
                max?: number
            };
            /**
             * Set if min or max value will be 0 on bar chart.
             */
            zerobased?: boolean;
            /**
             * Set space between bars in bar charts
             */
            space?: number;
        };
    
        pie?: {
            label?: {
                /**
                 * Show or hide label on each pie piece.
                 */
                show?: boolean;
                /**
                 * Set formatter for the label on each pie piece.
                 */
                format?(value: number, ratio: number, id: string): string;
                /**
                 * Set threshold to show/hide labels.
                 */
                threshold?: number
            };
            /**
             * Enable or disable expanding pie pieces.
             */
            expand?: boolean;
        };
    
        donut?: {
            label?: {
                /**
                 * Show or hide label on each donut piece.
                 */
                show?: boolean;
                /**
                 * Set formatter for the label on each donut piece.
                 */
                format?(value: number, ratio: number, id: string): string;
                /**
                 * Set threshold to show/hide labels.
                 */
                threshold?: number
            };
            /**
             * Enable or disable expanding pie pieces.
             */
            expand?: boolean;
            /**
             * Set width of donut chart.
             */
            width?: number;
            /**
             * Set title of donut chart.
             */
            title?: string;
        };
    
        gauge?: {
            label?: {
                /**
                 * Show or hide label on gauge.
                 */
                show?: boolean;
                /**
                 * Set formatter for the label on gauge.
                 */
                format?(value: any, ratio: number): string;
            };
            /**
             * Enable or disable expanding gauge.
             */
            expand?: boolean;
            /**
             * Set min value of the gauge.
             */
            min?: number;
            /**
             * Set max value of the gauge.
             */
            max?: number;
            /**
             * Set units of the gauge.
             */
            units?: string;
            /**
             * Set width of gauge chart.
             */
            width?: number;
        };
    
        spline?: {
            interpolation?: {
                /**
                 * Set custom spline interpolation
                 */
                type?: 'linear' | 'linear-closed' | 'basis' | 'basis-open' | 'basis-closed' | 'bundle' | 'cardinal' | 'cardinal-open' | 'cardinal-closed' | 'monotone';
            };
        };

        className?: string;
        style?: React.CSSProperties;
        unloadBeforeLoad?: boolean;
        tooltipComponent?: React.Component;
    }

    export default class C3Chart extends React.Component<C3ChartProps> {

    } 
}