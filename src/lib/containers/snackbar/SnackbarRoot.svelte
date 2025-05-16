<script lang="ts">
  type SnackbarContext = {
    message?: string;
    actions?: Record<string, () => void>;
    closable?: boolean;
    timeout?: number | null;
  };
</script>



